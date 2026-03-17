

namespace to diffrentiate pods/deployments.
default namspace by default.
can give name.

### to create new namespace

kubectl create namespace backend-team

kubectl get namespace

kubectl get pods -n backend-team

### start pod with manifest.yml

kubectl apply -f manifest.yml

then 
kubectl get pods 
-- no pods shown

kubectl get pods -n backend-team
-- pod shoen

kubectl delete pod nginx
-- nothing

kbectl delete pod nginx -n backend-team
deleted



kubectl config set-context --current --namespace=backend-team
to change default namespace