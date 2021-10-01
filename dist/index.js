"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var styles_1 = require("./styles");
var DayAndNightToggle = function (_a) {
    var onChange = _a.onChange, checked = _a.checked, _b = _a.size, size = _b === void 0 ? 32 : _b, _c = _a.startInactive, startInactive = _c === void 0 ? false : _c, _d = _a.animationInactive, animationInactive = _d === void 0 ? true : _d, _e = _a.shadows, shadows = _e === void 0 ? true : _e, _f = _a.className, className = _f === void 0 ? undefined : _f, labelProps = __rest(_a, ["onChange", "checked", "size", "startInactive", "animationInactive", "shadows", "className"]);
    var _g = __read((0, react_1.useState)(false), 2), disable = _g[0], setDisable = _g[1];
    var _h = __read((0, react_1.useState)(startInactive), 2), startingInactive = _h[0], setStartingInactive = _h[1];
    var roundedSize = Math.floor(size);
    (0, react_1.useEffect)(function () {
        if (startingInactive) {
            setDisable(true);
            setTimeout(function () {
                setDisable(false);
            }, 2000);
        }
        return setStartingInactive(false);
    }, [checked, startingInactive]);
    return (react_1.default.createElement(styles_1.SwitchContainer, __assign({ className: className, size: roundedSize }, labelProps),
        react_1.default.createElement(styles_1.Switch, { shadows: shadows, size: roundedSize, checked: checked, onClick: !disable
                ? function () {
                    onChange();
                    setDisable(true);
                    if (animationInactive) {
                        setTimeout(function () {
                            setDisable(false);
                        }, 2000);
                    }
                    else {
                        setDisable(false);
                    }
                }
                : null },
            react_1.default.createElement(styles_1.ContentWrapper, null,
                react_1.default.createElement(styles_1.Circle, null),
                react_1.default.createElement(styles_1.Stars, null,
                    react_1.default.createElement(styles_1.Star, null),
                    react_1.default.createElement(styles_1.Star, null),
                    react_1.default.createElement(styles_1.Star, null),
                    react_1.default.createElement(styles_1.ShootingStarWrapper, null,
                        react_1.default.createElement(styles_1.ShootingStar, null))),
                react_1.default.createElement(styles_1.Clouds, null,
                    react_1.default.createElement(styles_1.Cloud, null,
                        react_1.default.createElement(styles_1.Cloudpart, null),
                        react_1.default.createElement(styles_1.Cloudpart, null)),
                    react_1.default.createElement(styles_1.Cloud, null,
                        react_1.default.createElement(styles_1.Cloudpart, null),
                        react_1.default.createElement(styles_1.Cloudpart, null)),
                    react_1.default.createElement(styles_1.Cloud, null,
                        react_1.default.createElement(styles_1.Cloudpart, null),
                        react_1.default.createElement(styles_1.Cloudpart, null),
                        react_1.default.createElement(styles_1.Cloudpart, null)))))));
};
DayAndNightToggle.propTypes = {
    onChange: prop_types_1.default.func.isRequired,
    checked: prop_types_1.default.bool.isRequired,
    size: prop_types_1.default.number,
    startInactive: prop_types_1.default.bool,
    animationInactive: prop_types_1.default.bool,
    shadows: prop_types_1.default.bool,
    className: prop_types_1.default.string,
};
DayAndNightToggle.defaultProps = {
    onChange: function () { return null; },
    checked: false,
    size: 32,
    startInactive: false,
    animationInactive: true,
    shadows: true,
    className: undefined,
};
var propsAreEqual = function (prevProps, nextProps) {
    return prevProps.checked === nextProps.checked &&
        prevProps.size === nextProps.size &&
        prevProps.startInactive === nextProps.startInactive &&
        prevProps.animationInactive === nextProps.animationInactive &&
        prevProps.shadows === nextProps.shadows &&
        prevProps.className === nextProps.className;
};
exports.default = (0, react_1.memo)(DayAndNightToggle, propsAreEqual);
//# sourceMappingURL=index.js.map