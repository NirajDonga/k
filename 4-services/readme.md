# Services

## 1) NodePort
Connected to the Kubernetes cluster and started the nodes from the setup created earlier.

Created two pods:
- `pod1.yml` runs nginx
- `pod2.yml` runs httpd

Both pods use the same label, `app: nginx`, so the NodePort Service selects both of them.

After creating `NodePort.yml`, requests sent to any node IP on port `30007` can be routed to either pod.

## 2) LoadBalancer
- Exposes the service to external traffic.
- Helps with SSL/TLS termination.
- Commonly used with HTTPS.
- More secure and production-friendly.
- Easier to move across cloud providers.

## 3) ClusterIP
- Used for internal communication between services/pods.
- The IP is accessible only inside the cluster, not from outside.

## Commands Used

```bash
kubectl get nodes
kubectl apply -f pod1.yml
kubectl apply -f pod2.yml
kubectl get pods
kubectl apply -f NodePort.yml
kubectl get svc
kubectl get endpoints nginx-service
kubectl describe svc nginx-service
curl http://<node-ip>:30007
```