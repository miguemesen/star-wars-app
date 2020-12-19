
echo "1/3 Getting dependencies ..."
sudo npm install

echo "2/3 Starting the build of the react application ..."
sudo npm run build

echo "2/3 Packing the application into a docker image ..."
docker build . -t star-wars-server

echo "3/3 Steps completed. Bye"