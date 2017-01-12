docker rm -f node
docker run -d --name node -h node -p 3001:3001 -v $PWD:/var/www   -it $1
