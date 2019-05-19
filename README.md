## Installation
Clone the repo, open terminal in the root folder and run the command `yarn install` or `npm install`.

## Running application
After installing all dependencies you can start application on the simulator by executing theese commands in the project root folder
* **iOS:** `react-native run-ios` (will work only on MacOS)

* **Android:** At first prepare `Android development environment`. You can follow [this link](https://facebook.github.io/react-native/docs/getting-started#1-install-android-studio) to install it on your machine). After add your SDK location inside `project_root/android/local.properties` (create the file if it does not exist). Content should look like this:
```
sdk.dir=/path/to/your/Android/sdk
```
Then you can run `react-native run-android` to finally start application on emulator.

If you want to start it on the real Android device, you have to enable `usb debugging mode` on your mobile phone, connect it to the PC via usb cable, and run the command `react-native run-android`

## Build 
To build application binary `cd` into `android` folder and run `./gradlew assembleDebug` for building debug version or `./gradlew assembleRelease` for building release version. 

Building release version requires `release key`. It's not allowed to publish this key, but for the demonstration purpuse I added and commited it so you don't need to generate a new one.

After finishing the build command, it will add `apk` files in the directory `/project_root/android/app/build/outputs/apk/debug|release`. 

It will generate several apk files for different CPU architectures. If you don't know wich one is yours, just take `app-universal-******.apk` file. It contain all versions, so you can install it on any device.

I have already built and uploaded `apk` files [here](https://drive.google.com/drive/folders/1oixesys9vAzPhgGG4A5HlY_rQsOY1iNm?usp=sharing), so you can just take it and install on the device.
