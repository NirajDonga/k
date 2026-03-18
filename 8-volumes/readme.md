# Volumes

## Ephemeral (emptyDir)
Shared between containers in a pod. Lost when pod is deleted.

```bash
kubectl apply -f ephermal.yml
kubectl get pods -l app=shared-volume-app
```

## Static Persistent Volumes (NFS)
Manually created PV + PVC binding.

```bash
kubectl apply -f static-k8.yml
kubectl get pv,pvc
```

## Docker Compose NFS Server

```bash
docker compose -f static-dockercompose.yml up -d
```

## Dynamic Provisioning (StorageClass)
Provider automatically creates PV.