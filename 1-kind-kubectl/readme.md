# Kind + kubectl Commands

## Create Cluster

Linux:

```bash
kind create cluster --config ./clusters.yml --name local
```

## Verify

```bash
kubectl get nodes
kubectl get pods -A
```

Watch:

```bash
kubectl get nodes -w
```

## Test Pod

```bash
kubectl run nginx-demo --image=nginx --port=80
kubectl get pod nginx-demo
kubectl logs -f nginx-demo
kubectl describe pod nginx-demo
kubectl delete pod nginx-demo
```

## Delete Cluster

```bash
kind delete cluster --name local
```
