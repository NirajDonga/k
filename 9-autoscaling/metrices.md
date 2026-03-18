# Metrics Server & Pod Metrics

Kubernetes Metrics Server collects resource metrics (CPU, memory) from Kubelets on each node. These metrics are used by HPA (Horizontal Pod Autoscaler) and VPA for autoscaling decisions.

## 1) Install Metrics Server

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# Verify installation
kubectl get deployment metrics-server -n kube-system
kubectl get pods -n kube-system -l k8s-app=metrics-server
```

## 2) Kubelet Metrics

Each node's Kubelet exposes metrics at `https://node-ip:10250/metrics`:
- CPU usage per container
- Memory usage per container
- Pod resource metrics

Metrics Server scrapes these endpoints and aggregates them.

## 3) View Pod Metrics

```bash
# Get CPU and memory usage of all pods
kubectl top pods

# Get metrics for specific pod
kubectl top pod <pod-name>

# Get metrics for pods in namespace
kubectl top pods -n <namespace>

# Get node metrics
kubectl top nodes
```

## 4) Metrics Data Flow

```
Kubelet (node) 
  ↓ exposes metrics
Metrics Server 
  ↓ aggregates
API Server (metrics.k8s.io/v1)
  ↓ read by
HPA / VPA / kubectl top
```

## 5) Resource Requests & Limits

HPA calculates pod replicas based on:
- `requests.cpu` / `requests.memory` — baseline for % calculation
- Current metrics from Metrics Server

Pod definition example:

```yaml
containers:
- name: app
  resources:
    requests:
      cpu: 100m
      memory: 128Mi
    limits:
      cpu: 500m
      memory: 512Mi
```

**Note:** Without `requests` defined, HPA cannot calculate percentage-based scaling.

## 6) Typical Metrics Delay

- Metrics collection: ~15 seconds
- HPA evaluation: every 15-30 seconds (default)
- Scale-up/down lag: 1-5 minutes (by default)

## 7) Check Metrics Server Status

```bash
# Logs
kubectl logs -n kube-system -l k8s-app=metrics-server -f

# API availability
kubectl get apiservice v1beta1.metrics.k8s.io -o yaml
```
