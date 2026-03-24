1: Create cluster
2: Install argocd
3: create opds github repo
4: create new app in argocd for the backend

1: check 1-kind-kubectl

2: 

make a namespace with 
    - kubectl create namespace argocd

apply the manifest with
    - kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml



### port forwarding

kubectl port-forward svc/argocd-server -n argocd 8080:443 (ton acces ui)

### get credentials
kubectl -n argocd get secret argocd-initial-admin-secret -o json

decode the password and admin is username
make application fill details.

