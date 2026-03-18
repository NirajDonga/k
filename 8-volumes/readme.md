ephemeral volumes => two containers in pod want to share data. pod dies. volume gone
persistant volumes


static persistant volume
make pv
make pvc
make pod and boundd with pvc

pod <-> pvc <-> pv


auto
no need to create pv.
provider handle that