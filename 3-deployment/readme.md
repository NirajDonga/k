# deployment rollouts

A deployment automatically creates and manages a ReplicaSet.

## 1) apply

```bash
kubectl apply -f deployment.yml
kubectl get deployments
kubectl get pods
kubectl get replicaset
```

## 2) self-heal test

Delete a pod — deployment recreates it automatically:

```bash
kubectl delete pod <pod-name>
```

## 3) rolling update

Change the image in `deployment.yml` (e.g. `nginx` → `mongo`), then apply:

```bash
kubectl apply -f deployment.yml
```

Watch the rollout in another terminal — old pods removed, new ones created one by one:

```bash
kubectl get pods -w
kubectl get replicaset   # new RS created, old RS scaled to 0
```

## 4) bad image test

Set an invalid image name in `deployment.yml` and apply. The new pods will fail (`ImagePullBackOff`) while old pods keep running — deployment does not replace them until the new version is healthy.