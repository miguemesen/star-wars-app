
echo "1/4 Getting dependencies ..."
sudo npm install

echo "2/4 Starting the build of the react application ..."
sudo npm run build

echo "2/4 Packing the application into a docker image ..."
docker build . -t miguemesen/star-wars-server:latest

echo "3/4 Packing the application into a docker image ..."
docker login -u miguemesen -p $DOCKER_HUB_PASSWORD
docker push star-wars-server:latest

echo "4/4 Steps completed. Bye"