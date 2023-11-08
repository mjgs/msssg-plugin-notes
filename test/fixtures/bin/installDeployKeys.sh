#!/usr/bin/env bash

echo "Installing deploy keys..."

BIN_DIR=$repo_dir/test/fixtures/bin

$BIN_DIR/installDeployKey.sh "id_rsa_msssg" "$private_deploy_key_msssg"
$BIN_DIR/installDeployKey.sh "id_rsa_ssg" "$private_deploy_key_ssg"
$BIN_DIR/installDeployKey.sh "id_rsa_file" "$private_deploy_key_file"
$BIN_DIR/installDeployKey.sh "id_rsa_stack" "$private_deploy_key_stack"
$BIN_DIR/installDeployKey.sh "id_rsa_msssg-plugin-posts" "$private_deploy_key_plugin_posts"

echo "Final ssh config:"
cat $HOME/.ssh/config

exit 0