# ConfigMap + Secret

- Use `ConfigMap` for non-sensitive config.
- Use `Secret` for sensitive data.
- Secret is mounted as a file at `/app/secret/.env` in the container.

## Apply

```bash
kubectl apply -f configmap.yml
kubectl apply -f secret.yml
kubectl apply -f deployment.yml
```

## Verify

```bash
kubectl get configmap backend-configmap
kubectl get secret backend-secrets
kubectl get deploy backend-deployment
kubectl get pods -l app=backend
```