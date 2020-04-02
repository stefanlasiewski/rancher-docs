---
title: Logging
weight: 110
---

The following log levels are used in Rancher:

| Name    | Description |
|---------|-------------|
| `info`  | Logs informational messages. This is the default log level. |
| `debug` | Logs more detailed messages that can be used to debug. |
| `trace` | Logs very detailed messages on internal functions. This is very verbose and can contain sensitive information. |

### How to configure a log level

* Kubernetes install
 * Configure debug log level
```
$ KUBECONFIG=./kube_config_rancher-cluster.yml
$ kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher | grep '1/1' | awk '{ print $1 }' | while read rancherpod; do kubectl --kubeconfig $KUBECONFIG -n cattle-system exec $rancherpod -- loglevel --set debug; done
OK
OK
OK
$ kubectl --kubeconfig $KUBECONFIG -n cattle-system logs -l app=rancher
```

 * Configure info log level
```
$ KUBECONFIG=./kube_config_rancher-cluster.yml
$ kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher | grep '1/1' | awk '{ print $1 }' | while read rancherpod; do kubectl --kubeconfig $KUBECONFIG -n cattle-system exec $rancherpod -- loglevel --set info; done
OK
OK
OK
```

* Docker Install
 * Configure debug log level
```
$ docker exec -ti <container_id> loglevel --set debug
OK
$ docker logs -f <container_id>
```

 * Configure info log level
```
$ docker exec -ti <container_id> loglevel --set info
OK
```