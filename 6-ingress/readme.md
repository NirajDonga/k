# Ingress

Ingress routes external HTTP/HTTPS traffic to internal `ClusterIP` services using host/path rules.

## 1) Install nginx ingress controller

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml
kubectl get pods -n ingress-nginx
```

## 2) Apply frontend + backend + ingress

```bash
kubectl apply -f fe.yml
kubectl apply -f be.yml
kubectl apply -f ingress.yml
kubectl get ingress
kubectl describe ingress ingress-cluster
```

## 3) Current routing

- `frontend.com` + `/` -> `frontend-Service:80`
- `backend.com` + `/1` (Prefix) -> `backend-Service:80`

Examples:
- `http://frontend.com/any` -> frontend service
- `http://backend.com/1` -> backend service
- `http://backend.com/1/api` -> backend service

`Prefix` means URL path starts with given path. So `/1` matches `/1/...` but not `/`.
