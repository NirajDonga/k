# replicaset quick guide

## apply

```bash
kubectl apply -f rs.yml
kubectl get rs
kubectl get pods
```

## verify self-heal

Delete one pod from this ReplicaSet:

```bash
kubectl delete pod <pod-name>
kubectl get pods
```

A new pod should appear automatically.

## cleanup

```bash
kubectl delete -f rs.yml
```