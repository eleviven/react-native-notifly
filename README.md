<p align="center">
<img src="https://i.imgur.com/L2pxZlUl.png" alt="Notifly"  width="50%" style="border: 0; width: 50%; min-width: 240px; max-width: 100%;"/>
</p>

<h3 align="center" style="text-align: center;">React Native Notifly</h3>
<p align="center" style="font-size: 1.2rem;">Notifly allows you to show application notifications within the application and with your own components</p>

## Installation

```bash
npm install --save react-native-notifly
```

## Usage

First you have to add Notifly to App

```jsx
//App.js
import React from "react";
import { Notifly } from "react-native-notifly";

export default function App() {
  return (
    <View>
      {/* ... */}
      <Notifly />
    </View>
  );
}
```

<br/>
After that just you need to call `fire` methods from anywhere in your app. 🎉

### Show notification

```jsx
import React from "react";
import { Button } from "react-native";
import { fire } from "react-native-notifly";

export default function ExampleScreen() {
  return (
    <Button
      title="Fire Notification"
      onPress={() =>
        fire({
          title: "Title",
          message: "Some text message",
          avatar: { uri: "image url" },
          options: {
            behaviour: "swipe",
            duration: 2000,
          },
          onPress: (args) => console.log(args),
        })
      }
    />
  );
}
```

<br/>
<p style="margin-bottom: 10px">You can use Notifly with <b>your own components</b>. See below example</p>
<br/>

```jsx
export default function ExampleScreen() {
  return (
    <Button
      title="Fire Notification"
      onPress={() =>
        fire({
          title: "Title",
          message: "Some text message",
          component: (args) => (
            <View>
              <Text>{args.title}</Text>
            </View>
          ),
        })
      }
    />
  );
}
```

### Fire Props

<table style="width: 100%">
    <thead>
        <tr>
            <th>Property</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>title</td>
            <td>none</td>
            <td>Title of notification</td>
        </tr>
        <tr>
            <td>message</td>
            <td>none</td>
            <td>Message of notification</td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>none</td>
            <td>Avatar icon of notification</td>
        </tr>
        <tr>
            <td>onPress</td>
            <td>none</td>
            <td>onPress callback for notification press</td>
        </tr>
        <tr>
            <td>component</td>
            <td>none</td>
            <td>Set a your custom component</td>
        </tr>
        <tr>
            <td>options</td>
            <td>FireOptions</td>
            <td>Notification options</td>
        </tr>
    </tbody>
</table>

### FireOptions

<table style="width: 100%">
    <thead>
        <tr>
            <th>Property</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>behaviour</td>
            <td>swipe</td>
            <td>The behaviour prop set the behaviour of notification. You can use one of them. <code>swipe</code>, <code>clear</code>, <code>over</code> </td>
        </tr>
        <tr>
            <td>duration</td>
            <td>2000</td>
            <td>The duration prop set the notification duration.</td>
        </tr>
    </tbody>
</table>
<br/>
<p align="center">
<img src="https://media2.giphy.com/media/C8lfq0sR0Vk2BERd98/giphy.gif" alt="Notifly" style="display:block;width: 400px;margin:0 auto;"/>
</p>

## License

[MIT](./LICENSE)
