var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var React=_interopRequireWildcard(require("react"));var _reactTestRenderer=_interopRequireDefault(require("react-test-renderer"));var _Slider=_interopRequireDefault(require("../Slider"));var _jsxFileName="/Users/michalchudziak/Projects/react-native/react-native-slider/src/js/__tests__/Slider.test.js";describe('<Slider />',function(){it('renders enabled slider',function(){var tree=_reactTestRenderer.default.create(React.createElement(_Slider.default,{__source:{fileName:_jsxFileName,lineNumber:9}})).toJSON();expect(tree).toMatchSnapshot();});it('renders disabled slider',function(){var tree=_reactTestRenderer.default.create(React.createElement(_Slider.default,{disabled:true,__source:{fileName:_jsxFileName,lineNumber:15}})).toJSON();expect(tree).toMatchSnapshot();});it('renders a slider with custom props',function(){var tree=_reactTestRenderer.default.create(React.createElement(_Slider.default,{value:0.5,minimumValue:-1,maximumValue:2,step:0.25,minimumTrackTintColor:'blue',maximumTrackTintColor:'red',thumbTintColor:'green',onSlidingComplete:function onSlidingComplete(){},onValueChange:function onValueChange(){},__source:{fileName:_jsxFileName,lineNumber:23}})).toJSON();expect(tree).toMatchSnapshot();});});