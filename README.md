# Exchange

## About
Would you reconsider your purchasing decisions if product prices were displayed in units of your favorite things? Do you love the cheeseburger meals from McDonald's? Would you rather have that cool new water bottle or 7 1/2 of micky-d's finest cheeseburger meals? Be reminded of the things that matter most to you when online shopping and (hopefully) reduce your spendings!

Exchange is a chrome extension that allows users to set items of value to them (e.g. a cheeseburger, the chirashi bowl they always get at their favorite sushi place, ...), which replaces monetary values on any webpage to reflect their value in units of those items.

## Dev Setup

- In addition to `npm install`ing the project's dependencies, be sure to `npm i -g react-devtools` (react devtools extension does not work when inspecting chrome extension popup).
- Make sure that `<script src="http://localhost:8097"></script>` is the first script in the head before `react-dom` is imported.
- `npm run build-dev` to
  - Launch the standalone `react-devtools`
  - Run `webpack -w` and bundle react app
- Load in chrome
  - Navigate to `chrome://extensions/`
  - Click "Load unpacked extension..." and select the dist folder of this project
  - To pull up inspector/devtools, right-click extension icon to "Inspect Popup"