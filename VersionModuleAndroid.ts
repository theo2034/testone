import {NativeModules} from 'react-native';
// Module can be renamed DeviceInfoModule incase we need more than just the version
const {VersionModule} = NativeModules;
interface VersionInterface {
  getConstants(): void;
}
export default VersionModule as VersionInterface;
