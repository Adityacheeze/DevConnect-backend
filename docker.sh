echo "building docker file"

docker build -t adityacheeze/devconnect:latest .

echo "build done, now pushing do docke hub - adityacheeze/devconnect"

docker push adityacheeze/devconnect:latest

echo "push done"