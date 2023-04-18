import * as React from 'react';
import { useTheme } from '@mui/material/styles';

export interface PyramidProps {
  baseWidth: number;
}

function Pyramid({ baseWidth }: PyramidProps) {
  const theme = useTheme();
  return (
    <div>
      {Array.from({ length: baseWidth }, (_, layerWidth) => {
        return (
          <div key={layerWidth} style={{ display: 'flex', justifyContent: 'center' }}>
            {Array.from({ length: layerWidth + 1 }, (__, i) => (
              <div
                key={i}
                style={{
                  flex: 1 / baseWidth,
                  aspectRatio: 1,
                  backgroundColor: theme.palette.primary.main,
                  borderColor: theme.palette.primary.dark,
                  borderWidth: 4,
                  borderStyle: 'solid',
                  margin: 2,
                }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Pyramid;
