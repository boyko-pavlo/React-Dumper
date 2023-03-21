import { FC } from 'react';
import { JSONFormatterConfiguration } from 'json-formatter-js';
interface IDumperProps {
    data: any;
    config?: JSONFormatterConfiguration;
}
declare const DumperView: FC<IDumperProps>;
export default DumperView;
