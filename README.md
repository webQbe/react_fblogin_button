# React Facebook Login Button
This repo is an adaptation of [Facebook Login Button In React](https://www.youtube.com/watch?v=ea9KyE78qKI) by Brad Traversy. 

I followed the tutorial to learn followings:
- Facebook Authentication with React
- Request data when user clicks the button 
- Store user's data in component state and render it in the app
- Use this data to store in a database

## Getting Started

### Register Your App

1. Register your app at Meta for Developers
    1. Go to `https://developers.facebook.com/apps/`
    2. Click **Create App** button
    3. Enter **App name** and **App contact email**
    4. In **Add use cases** list, choose **Other** option
    5. **Select an app type** select **Consumer**
    6. Review  **App name** and **App contact email** and click **Create App**

2. On **Add products to your app** page
    1. Choose **Facebook Login** & click Set up button
    2. Select **Web** platform
    3. Add site URL: `http://localhost/` > Continue
    4. Skip all other steps

3. Go to **App settings** > **Basic**
    1. Add `localhost` to **App domains**
    2. Click **Save Changes**

4. Copy your App ID


### Create React App

1. Download and Install **Node.js**
2. Open project folder in VSCode Integrated Terminal
3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter
4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` in `defineConfig()`
5. Install dependencies:
    - Open terminal and run `npm install`
6. Run sever with `npm run dev`
7. Install packages: `npm install react-facebook-login --legacy-peer-deps`
8. Delete `public/vite.svg`, `src/assets/react.svg` and `src/index.css`
9. Remove following imports:
```
/* App.jsx */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/* main.jsx */
import './index.css'
```
10. Create `.env` file


## Credits
Original tutorial: [Facebook Login Button In React](https://www.youtube.com/watch?v=ea9KyE78qKI) — Brad Traversy.

## License
MIT License