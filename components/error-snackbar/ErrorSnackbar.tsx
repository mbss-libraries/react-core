import React, { Fragment } from 'react';

// const Alert = (props: AlertProps) => {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// };

interface IProps {}
export const ErrorSnackbar: React.FC<IProps> = () => {
  // const dispatch: Dispatch = useDispatch();
  // const toasts: IToast[] = useSelector((state: IStore) => state.toasts.items);

  // const onClickRemoveNotification = useCallback(
  //   (id: string): void => {
  //     // dispatch(ToastsAction.removeById(id));
  //   },
  //   [dispatch],
  // );

  return (
    <Fragment>
      {/* {toasts.map((error) => (
        <Snackbar key={error.id} open={true} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert severity="error" className="text-center" onClose={() => onClickRemoveNotification(error.id)}>
            <div className="mx-3">
              <strong>{error.title}</strong>
              <br />
              <small>{error.message}</small>
            </div>
          </Alert>
        </Snackbar>
      ))} */}
    </Fragment>
  );
};
