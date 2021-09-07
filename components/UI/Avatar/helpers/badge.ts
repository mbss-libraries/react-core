export const getDotCssProperties = (position: EDotPositions): React.CSSProperties => {
  switch (position) {
    case EDotPositions.topRight:
      return { marginTop: '10%', marginRight: '15%' };
  }
};

export enum EDotPositions {
  topRight,
}

export const getBadgeCssProperties = (position: EBadgePositions): React.CSSProperties => {
  switch (position) {
    case EBadgePositions.bottomLeft:
      return { marginTop: '75%', marginRight: '90%' };
  }
};

export enum EBadgePositions {
  bottomLeft,
}
