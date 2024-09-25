# Simple Modal Example

How to run:

First clone the project: `git clone https://github.com/betomoedano/expo-router-modal-example.git`

```bash
# Install dependencies
pnpm install

# Start the app
pnpm start
```

## Test deep linking

Generate the ios and android folders by running:

```bash
npx expo prebuild

# Run the app on iOS
pnpm ios

# Run the app on Android
pnpm android

# Run the app on web
pnpm web
```

## iOS Deep Linking Test

Open safari and type your app `scheme` + the screen to open, you can find this in the `app.json` file.

```bash
# Passing a parameter is optional
modal-app://modal?profileId=@betomoedano
```

## Android Deep Linking Test

Start your Android emulator, then open your terminal and run the following command:

```bash
adb shell am start -W -a android.intent.action.VIEW -d "modal-app://modal"
```

## Web Deep Linking Test

Paste this in your browser search bar:

```bash
http://localhost:8081/modal?profileId=@betomoedano
```
