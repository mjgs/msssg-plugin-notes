#!/usr/bin/env bash

key_name=$1
key_contents=$2

ssh_dir="$HOME/.ssh"
ssh_config="$ssh_dir/config"

mkdir -p "$ssh_dir"
          
key_file="$ssh_dir/$key_name"

echo "Creating key: $key_file"

echo "$key_contents" > "$key_file"
chmod 600 "$key_file"
            
echo "Adding key to ssh config..."

echo "Host github.com-$key_name" >> "$ssh_config"
echo "  Hostname github.com" >> "$ssh_config"
echo "  IdentityFile=$ssh_dir/$key_name" >> "$ssh_config"
echo "" >> "$ssh_config"

exit 0