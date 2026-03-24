

### install

curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

verify
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

### add mongo chart

helm repo add bitnami https://charts.bitnami.com/bitnami

helm repo update

helm search repo bitnami/mongodb

### create a namespace

kubectl create namespace mongodb

helm install my-mongo bitnami/mongodb \
  --namespace mongodb \
  --set auth.rootPassword=secretpassword \
  --set auth.enabled=true


  

### check

// See all databases
show dbs

// Create a test database and insert a document
use myapp
db.users.insertOne({ name: "Niraj", role: "developer" })

// Read it back
db.users.find()

// Exit when done
exit



### customizing vaules

helm show values bitnami/mongodb > default-values.yaml

# my-values.yaml

auth:
  enabled: true
  rootPassword: "secretpassword"
  username: "niraj"
  password: "mypassword"
  database: "myapp"

# Request modest resources (good for local dev)
resources:
  requests:
    cpu: "250m"
    memory: "256Mi"
  limits:
    cpu: "500m"
    memory: "512Mi"

# Keep only 1 replica locally
replicaCount: 1

# Persist data even if pod restarts
persistence:
  enabled: true
  size: "2Gi"

# upgred the release

helm upgrade my-mongo bitnami/mongodb \
  --namespace mongodb \
  --values my-values.yaml


# fixed

helm upgrade my-mongo bitnami/mongodb \
  --namespace mongodb \
  --values my-values.yaml \
  --set auth.rootPassword=secretpassword
## didnt worked

### worked

# Uninstall the old release
helm uninstall my-mongo -n mongodb

# Wait for pods to terminate
kubectl get pods -n mongodb -w

# Reinstall cleanly with your full values file
helm install my-mongo bitnami/mongodb \
  --namespace mongodb \
  --values my-values.yaml


### upgred

change this in file
resources:
  requests:
    cpu: "300m"       # changed from 250m
    memory: "512Mi"   # changed from 256Mi
  limits:
    cpu: "600m"       # changed from 500m
    memory: "768Mi"   # changed from 512Mi

run: 

helm upgrade my-mongo bitnami/mongodb \
  --namespace mongodb \
  --values my-values.yaml

  run helm list -n mongodb
# REVISION should now be 2

run helm history my-mongo -n mongodb

### fail the pod now with broken config

helm upgrade my-mongo bitnami/mongodb \
  --namespace mongodb \
  --values my-values.yaml \
  --set image.tag=99.99.99-does-not-exist

kubectl get pods -n mongodb -w
## pod is failed

helm history my-mongo -n mongodb
### still new version got deployed(broken)

### rollback
helm rollback my-mongo 2 -n mongodb


# Remove the release entirely
helm uninstall my-mongo -n mongodb

# Remove the namespace
kubectl delete namespace mongodb