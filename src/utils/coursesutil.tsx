import {
  JavascriptOriginal,
  PythonOriginalWordmark,
  JavaOriginalWordmark,
  CPlain,
  ReactOriginalWordmark,
  Css3Original,
  DeviconsReactOriginal,
  RPlain,
  Html5Original,
  ArduinoOriginalWordmark,
  MysqlOriginalWordmark,
  NodejsOriginal,
  MongodbOriginal,
} from "devicons-react";

const iconSize = "30px";

function languageToIcon(language: string) {
  let icon;

  switch (language) {
    case "Python":
      icon = <PythonOriginalWordmark size={iconSize} />;
      break;
    case "JavaScript":
      icon = <JavascriptOriginal size={iconSize} />;
      break;
    case "Java":
      icon = <JavaOriginalWordmark size={iconSize} />;
      break;
    case "C":
      icon = <CPlain size={iconSize} />;
      break;
    case "React":
      icon = <ReactOriginalWordmark size={iconSize} />;
      break;
    case "CSS":
      icon = <Css3Original size={iconSize} />;
      break;
    case "HTML":
      icon = <Html5Original size={iconSize} />;
      break;
    case "R":
      icon = <RPlain size={iconSize} />;
      break;
    case "Arduino":
      icon = <ArduinoOriginalWordmark size={iconSize} />;
      break;
    case "SQL":
      icon = <MysqlOriginalWordmark size={iconSize} />;
      break;
    case "Node":
      icon = <NodejsOriginal size={iconSize} />;
      break;
    case "MongoDB":
      icon = <MongodbOriginal size={iconSize} />;
      break;
    default:
      // Default case, when the language is not matched
      icon = <DeviconsReactOriginal size={iconSize} />;
      break;
  }

  // icon.props.size=iconSizeAfter;

  return icon;
}

export { languageToIcon };
