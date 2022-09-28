#!/bin/bash

printf 'What do you want to do? [import|export]\n'
read option

kc_option=""
if [[ "$option" == "import" ]]; then
  kc_option="import"
elif [[ "$option" == "export" ]]; then
  kc_option="export"
else
  printf "You need to select one of either; import or export"
  exit 1
fi

kc_container=$(docker ps -a --filter "name=docker-keycloak" -q)
kc_script_paths="/opt/keycloak/bin"
kc_import_export_cmd="kc.sh $kc_option --dir /tmp/export"

printf 'KC Container ID: %s\n' "$kc_container"
# Enter docker container
docker exec -it $kc_container $kc_script_paths/$kc_import_export_cmd
