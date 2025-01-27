# Docker 
## Build image
docker build -t red-flag .

## Create container
docker run --name 'red-flag' -d -p 5005:5005 red-flag

## Run container
docker start red-flag