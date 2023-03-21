import { FC } from 'react';
import { JSONFormatterConfiguration } from 'json-formatter-js';
interface IDumperProps {
    data: any;
    config?: JSONFormatterConfiguration;
}
declare const Dumper: FC<IDumperProps>;
export default Dumper;
