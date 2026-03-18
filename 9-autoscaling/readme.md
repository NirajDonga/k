# Metrics Server

Collects CPU/memory metrics from Kubelets. Used by HPA for autoscaling.

## Install

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

## View Metrics

```bash
kubectl top pods
kubectl top pod <pod-name>
kubectl top nodes
```

## Data Flow

Kubelet → Metrics Server → API Server (metrics.k8s.io) → HPA/VPA

## Requirements for HPA

Pod must define resource `requests`:

```yaml
resources:
  requests:
    cpu: 100m
    memory: 128Mi
```

HPA scales based on: `(current_metric / request) * 100`

