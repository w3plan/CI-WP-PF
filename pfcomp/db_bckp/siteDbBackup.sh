#!/bin/sh
# Shell scripting sample for MySQL database backup to Unix/Linux

theDir=$(dirname $0)
theDate=$(date +"%Y-%m-%d")
removedDate=$(date -d "$theDate -14 days" +%Y-%m-%d)

dbHost="Database host"
dbUser="Database user"
dbPassWord="Database password"
dbName="Database name"

mysqldump -h "$dbHost" -u "$dbUser" -p"$dbPassWord" "$dbName" > "$theDir"/"$theDate"_"$dbName".sql

gzip -f "$theDir"/"$theDate"_"$dbName".sql

rm "$theDir"/"$removedDate"_"$dbName".sql.gz
