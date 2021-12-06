#!/bin/bash

echo
echo
echo '#########################'
echo
echo "1. zip..."
rm -rf dist.zip 
zip -r dist.zip dist/


echo
echo '#########################'
echo
echo "3. scp"

scp -P 22 -r ./dist.zip root@feblog.cn:/data/web/app

echo '###########END###########'


