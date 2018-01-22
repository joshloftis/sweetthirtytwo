import React from 'react';
//import App from './App';
import '../css/navheader.css';

const Header = props =>
    <div className="App">
        <div className="App-header b--black-10 br3 ba">
            {/* Both of the img's below should be the logo icons in the mockup */}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGXSURBVGhD7ZgxSgRBEEX7AEZiqMaGoqmRgbGJiakewExv4A0EQcHYEyiiCBp6GGMV9P9g5NN2O9MzzVC91IMXdFU3VT/ZXTYUcAG/RZ5rM8cMD1KCBynBgxQwacYavIYPGXchyQ1hP/WuxCkzriAzhFeoj2MPIckNYV/rY5w64wWGLymk7IZswQORZ1IzyNgZzJBsqN2QHDWD5BgyI1lUH+HlP7KfeldijRnJYosmiy2aLLZo+IwKLcoM4V4KrXoHwzI8hx9Qm0/w1pjcSXfkztydGX55h3ppB1qDO+mO3PkPHmRGqgRZh9siz8oS1P4mjGFN7/CN0jejSpDcL9OOIUPmmOFBOjyIMEsQC3gQa3gQ5Qy+iTwr/LLT/jOMYU3vxF+afTOqBFmYTy0PIpgIkvvzrGMFan8fxrCmd/hG6ZtRJYgFPIg1qgTZg6ciz8oq1P4JjGFN7/CN0jejSpCF+dTyIIKJIMdQ/yzjWdmA2r+BMazpHb5R+mZUCWIBD2KNUUGOoP5ZZkHupDsOCtKCHsSaixYkhB8lx4UM5HQ25QAAAABJRU5ErkJggg==" className="App-icon" alt="logo" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIaSURBVGhD7dlPSJRBGMfxt/8EncJDHTwYhNClLkFFdLCTBOJBoUtChIGHwHMHOwYRHYXOHYKwIOhiCIpe/FOHiMQoEJEwikwQK8rK729xZHYcpdhdeUbnB5+Dzzu77zysM7vMW+yE7MZRHDOgHgfwz9mPGxjFMv4a8xa3UYcNcwJTiL2BNV/RinVphC7GXmTVb7RjLXvxGuFAfTpP8ciAx5iAJu/PcQlaP6VcgX9xER2wmLN4D3++91HKM/gXrsNyTuEn3Hy/YA+KudWCfIK2XevRv7ybsxxH2TY7pkICuQu/kXMoK4yokED0XeLP+zzKCrmRLU5uxFpyI9aSG7GW3Ii15EasJTdiLbkRa9nejfzyCjpySSH34DdyBsWsV1jAPlhPP/xGGlA6APOLPbCci/gDN98P2IWiZbXg6MzoFv7r9HsLoslexmf4872DUjRgCP5F0YnjK7yIGEbsELkJg4i9phIvETYgOoc7jLUcwQzCgZv5Dj0/cTmEecTG1oLufwHromYGEHvRRm7C5RpiY2rhHU5j01zCQ0zjB2Jv5GiMO2IdR2xMNeg0VItau1Un9ECq4ryBf5NmnAxqH1GVm9Uy3fAn/QS9QU3fvOajXeIb3KT1y0A7nPtbD2P0ADOJPICbeOg5kol+pMWakDYklUmETSSxyMOEi16SWORhwkWf1CIP42+7fSqkGq2Hq+jCQRVycnIspihWAI2NQbFRNp+VAAAAAElFTkSuQmCC" className="App-icon1" alt="logo" />
            <h2 className="title">Suite32</h2>
            <h5 className="addcustomer"> + Add New Customer</h5>
        </div>
    </div>


export default Header;
