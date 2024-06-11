import { useState } from 'react';
import './index.css';
import Announcement from './Announcement';
import Navbar from './Navbar';
const App = () => {
  const [brightness, setBrightness] = useState({
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  });
  const [contrast, setContrast] = useState({
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  });
  const [saturation, setSaturation] = useState({
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  });
  const [greyScale, setGreyScale] = useState({
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  });
  const [sepia, setSepia] = useState({
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  });

  const [hueRotate, setHueRotate] = useState({
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg',
  });
  const [blur, setBlur] = useState({
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: 'px',
  });
  const [backgroundImage, setBackgroundImage] = useState(
    'https://images.pexels.com/photos/982865/pexels-photo-982865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  );
  return (
    <div>
      <Announcement />
      <Navbar setBackgroundImage={setBackgroundImage} />
      <div className="wrapper">
        <div className="img_wrapper">
          <div className="image">
            <img
              src={backgroundImage}
              style={{
                filter: `${brightness.property}(${brightness.value}${brightness.unit})
               ${contrast.property}(${contrast.value}${contrast.unit})
                ${saturation.property}(${saturation.value}${saturation.unit})
                 ${greyScale.property}(${greyScale.value}${greyScale.unit})
                  ${sepia.property}(${sepia.value}${sepia.unit})
                   ${blur.property}(${blur.value}${blur.unit})
                    ${hueRotate.property}(${hueRotate.value}${hueRotate.unit})`,
              }}
              alt=""
            />
          </div>
        </div>
        <div className="options">
          <div className="mode">
            <span>Brightness</span>
            <input
              type="range"
              min={brightness.range.min}
              max={brightness.range.max}
              value={brightness.value}
              onChange={(e) => {
                setBrightness({ ...brightness, value: `${e.target.value}` });
              }}
            />
            <span>Contrast</span>
            <input
              type="range"
              min={contrast.range.min}
              max={contrast.range.max}
              value={contrast.value}
              onChange={(e) => {
                setContrast({ ...contrast, value: `${e.target.value}` });
              }}
            />
          </div>
          <div className="mode">
            <span>Saturation</span>
            <input
              type="range"
              min={saturation.range.min}
              max={saturation.range.max}
              value={saturation.value}
              onChange={(e) => {
                setSaturation({ ...saturation, value: `${e.target.value}` });
              }}
            />
            <span>Grayscale</span>
            <input
              type="range"
              min={greyScale.range.min}
              max={greyScale.range.max}
              value={greyScale.value}
              onChange={(e) => {
                setGreyScale({ ...greyScale, value: `${e.target.value}` });
              }}
            />
          </div>
          <div className="mode">
            <span>Sepia</span>
            <input
              type="range"
              min={sepia.range.min}
              max={sepia.range.max}
              value={sepia.value}
              onChange={(e) => {
                setSepia({ ...sepia, value: `${e.target.value}` });
              }}
            />
            <span>Hue Rotate</span>
            <input
              type="range"
              min={hueRotate.range.min}
              max={hueRotate.range.max}
              value={hueRotate.value}
              onChange={(e) => {
                setHueRotate({ ...hueRotate, value: `${e.target.value}` });
              }}
            />
          </div>
          <div className="mode blur">
            <span>Blur</span>
            <input
              type="range"
              min={blur.range.min}
              max={blur.range.max}
              value={blur.value}
              onChange={(e) => {
                setBlur({ ...blur, value: `${e.target.value}` });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
