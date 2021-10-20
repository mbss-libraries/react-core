import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import { Pagination, Table } from 'semantic-ui-react';
import './UITable.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import { UIInput } from '../ui-input/UIInput';
import { UISpinner } from '../ui-spinner/UISpinner';

export interface UITableProps {
  header: ITableHeaderData[];
  body: ITableBodyData[][];
  isLoading?: boolean;
  perPageDefault?: number;
  pagination?: boolean;
  searchable?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onPerPageChange?: (value: number) => void;
}

export const UITable: React.FC<UITableProps> = (props: React.PropsWithChildren<UITableProps>) => {
  const { header, isLoading, searchable, pagination, body, perPageDefault, onPerPageChange, style, className } = props;
  const [perPage, setPerPage] = useState<number>(perPageDefault ?? 25);
  const [sortable, setSortable] = useState<ISortable | undefined>();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string | undefined>();

  useEffect(() => {
    if (onPerPageChange) onPerPageChange(perPage);
  }, [perPage, onPerPageChange]);

  // const completeBody = useCallback(() => _.cloneDeep(body), [body]);
  const generateBody = (): { data: ITableBodyData[][]; totalPages?: number; items: number } => {
    let data = [...body];
    if (searchable) {
      const toRemove: number[] = [];
      const s = search?.toLowerCase().trim() ?? '';
      _.forEach(data, (row, index) => {
        const rowSearch = _.map(row, (item) => item.searchValue ?? item.value)
          .join(' ')
          .toLowerCase()
          .trim();
        if (!rowSearch.includes(s)) toRemove.push(index);
      });

      data = data.filter((row, index) => !toRemove.includes(index));
    }

    if (sortable) {
      data = _.orderBy(
        data,
        (row) => _.get(row, `[${sortable.key}].sortValue`) ?? _.get(row, `[${sortable.key}].value`),
        sortable.desc ? 'desc' : 'asc',
      );
    }

    let items = data.length;
    let totalPages = 0;
    if (pagination && perPage && data.length > 0) {
      totalPages = Math.ceil(data.length / perPage);
      if (page < 1) setPage(1);
      if (page > totalPages) setPage(totalPages);

      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      data = data.slice(startIndex, endIndex);
    }

    return { data, totalPages, items };
  };

  const { data, totalPages, items } = generateBody();
  return (
    <Fragment>
      <div className="row align-content-center" style={style}>
        <div className="col">
          <div className="h-100 ml-2 d-flex justify-content-start align-items-end text-muted">Items: {items}</div>
        </div>
        {searchable ? (
          <UIInput
            value={search}
            prefix={<FontAwesomeIcon icon="search" className="text-muted mr-2" />}
            className="col"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          <div className="col" />
        )}
        {pagination ? (
          <div className="col">
            <div className="d-flex justify-content-end">
              <div>
                <UIInput type="number" className="text-center" value={perPage} onChange={(el) => setPerPage(parseInt(el.target.value))} />
              </div>
            </div>
          </div>
        ) : (
          <div className="col" />
        )}
      </div>

      <Table celled className={className}>
        <Table.Header>
          <Table.Row>
            {_.map(header, (item, key) => (
              <Table.HeaderCell textAlign={item.textAlign ?? 'center'} key={key}>
                <div className="d-flex justify-content-around align-items-center">
                  {(item.sortable && <div></div>) ?? <div />}
                  {item.component}
                  {(item.sortable && (
                    <FontAwesomeIcon
                      className={`clickable small ${sortable?.key === key ? 'font-weight-bold' : 'text-muted'}`}
                      icon={sortable?.key === key ? (sortable?.desc ? 'sort-up' : 'sort-down') : 'sort'}
                      onClick={() =>
                        setSortable((prev) => {
                          return { key, desc: prev?.key === key ? !prev.desc : false };
                        })
                      }
                    />
                  )) ?? <div />}
                </div>
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.length > 0 &&
            _.map(data, (row, key) => (
              <Table.Row key={key}>
                {_.map(row, (item, key) => (
                  <Table.Cell key={key} textAlign={item.textAlign ?? 'center'} verticalAlign={item.verticalAlign ?? 'middle'}>
                    {item.component}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
        </Table.Body>
        {(data.length == 0 || isLoading) && (
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan="12" className="p-5">
                {isLoading && (
                  <div className="text-center">
                    <UISpinner size={36} />
                    <div className="h4 mt-4">Loading ...</div>
                  </div>
                )}
                {data.length == 0 && !isLoading && (
                  <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon="file" size="3x" className="text-muted mr-5" />
                    <div className="h4 mt-2">No data available ...</div>
                  </div>
                )}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        )}
      </Table>
      <div className="d-flex justify-content-center">
        {pagination && (perPage ?? 0) > 0 && (totalPages ?? 0) > 0 && (
          <Pagination onPageChange={(e, d) => setPage(parseInt(d.activePage?.toString() ?? '1'))} activePage={page} totalPages={totalPages ?? 0} />
        )}
      </div>
    </Fragment>
  );
};

export interface ITableHeaderData {
  sortable?: boolean;
  textAlign?: 'left' | 'right' | 'center';
  component: React.ReactNode;
}
export interface ITableBodyData {
  verticalAlign?: 'bottom' | 'middle' | 'top';
  textAlign?: 'left' | 'right' | 'center';
  value?: string | number | boolean;
  sort?: boolean;
  sortValue?: string | number | boolean;
  search?: boolean;
  searchValue?: string | number | boolean;
  component: React.ReactNode;
}

interface ISortable {
  key: string | number;
  desc: boolean;
}
