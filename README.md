# APEX Motors — Car Marketplace

Stack: React + Vite | Docker | Kubernetes (Civo K3s) | GitHub Actions + GHCR

## Estructura del proyecto

```
car-marketplace/
├── src/                        # App React
│   ├── components/             # Navbar, Hero, CarGrid, CarCard, CarModal
│   ├── data/cars.js            # Catálogo de autos
│   ├── App.jsx
│   └── App.css
├── k8s/                        # Manifiestos Kubernetes
│   ├── namespace.yaml
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml            # HTTPS via cert-manager + Let's Encrypt
│   ├── cert-manager-issuer.yaml
│   └── hpa.yaml                # Autoscaling
├── .github/workflows/
│   └── deploy.yml              # Pipeline dinámico (detecta stack automáticamente)
├── Dockerfile                  # Multi-stage: Node builder → nginx:alpine
└── nginx.conf
```

## Setup inicial (una sola vez)

### 1. Secrets en GitHub
Ve a Settings → Secrets → Actions y agrega:
- `CIVO_KUBECONFIG` → contenido de tu kubeconfig de Civo en base64

```bash
# Obtener kubeconfig de Civo y convertir a base64
civo kubernetes config car-marketplace-cluster | base64
```

### 2. Instalar cert-manager en el cluster
```bash
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.yaml
kubectl wait --for=condition=ready pod -l app=cert-manager -n cert-manager --timeout=60s
```

### 3. Reemplazar placeholders en los manifiestos
- `k8s/ingress.yaml` → cambia `cars.YOUR_DOMAIN.com`
- `k8s/cert-manager-issuer.yaml` → cambia `YOUR_EMAIL@example.com`
- `.github/workflows/deploy.yml` → cambia la URL del environment

## Correr localmente

```bash
npm install
npm run dev
```

## Pipeline — cómo detecta el stack

El pipeline detecta automáticamente el tipo de proyecto por sus archivos:

| Archivo detectado       | Stack identificado  |
|------------------------|---------------------|
| `angular.json`          | Angular             |
| `package.json` + vite   | React/Vite          |
| `package.json` + next   | Next.js             |
| `package.json` + express| Node.js backend     |
| `pom.xml`               | Java/Maven          |
| `build.gradle`          | Java/Gradle         |
| `requirements.txt`      | Python              |

Para agregar un nuevo proyecto al mismo pipeline, solo sube el código con el archivo de configuración correspondiente.
