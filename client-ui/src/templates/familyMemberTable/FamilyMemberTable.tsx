/* eslint-disable no-unused-vars */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useQuery, useReactiveVar } from '@apollo/client';
import Alert from '@mui/material/Alert';
import { FAMILY_MEMBERS } from '../../graphql/Queries';
import { applicantIdCurrEditing, user } from '../../graphql/Store';
import {
  FamilyMember,
  FamilyMemberWhereInput,
  Query,
} from '../../generated/graphql';
import LoadingSpinner from '../../components/common/LoadingSpinner';

type ID = keyof FamilyMember;

interface Column {
  id: ID;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: any) => string;
}

const columns: readonly Column[] = [
  {
    id: 'firstName',
    label: 'firstName',
  },
  {
    id: 'lastName',
    label: 'lastName',
    align: 'right',
  },
  {
    id: 'countryOfBirth',
    label: 'countryOfBirth',
    align: 'right',
  },
  {
    id: 'relationshipToApplicant',
    label: 'relationshipToApplicant',
    align: 'right',
  },
  {
    id: 'dateOfBirth',
    label: 'dateOfBirth',
    align: 'right',
  },
  {
    id: 'countriesOfCitizenship',
    label: 'countriesOfCitizenship',
    align: 'right',
  },
  {
    id: 'additionalInfo',
    label: 'additionalInfo',
    align: 'right',
  },
];

const FamilyMemberTable = () => {
  const applicantId = useReactiveVar(applicantIdCurrEditing);
  const currUser = useReactiveVar(user);

  const familyMemberWhereInput: FamilyMemberWhereInput = {
    createdBy: {
      id: currUser.id,
    },
    applicants: {
      some: {
        id: {
          equals: applicantId,
        },
      },
    },
    archived: {
      equals: false,
    },
  };

  const { data, loading, error } = useQuery<Query>(FAMILY_MEMBERS, {
    variables: {
      where: familyMemberWhereInput,
      orderBy: {
        updatedAt: 'Desc',
      },
    },
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [showOverlay, setShowOverlay] = React.useState(true);
  const [edit, setEdit] = React.useState(false);
  const [editId, setEditId] = React.useState('');

  React.useEffect(() => {
    if (data) setShowOverlay(() => false);
  }, [loading]);

  const rows = data?.familyMembers as FamilyMember[];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rowOnclickHandler = (rowId: string) => {
    setEditId(rowId);
    setEdit(!edit);
  };

  if (loading)
    return <LoadingSpinner show text={'Getting education histories'} />;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {error ? (
        <Alert severity="error">
          Ah Sh-t! Failed to load your employment history.
        </Alert>
      ) : null}
      <TableContainer sx={{ maxHeight: 630 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                {columns.map((column) => {
                  const i = column.id;
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      onClick={() => rowOnclickHandler(row.id)}
                    >
                      {row[`${i}`]}
                      {/* test */}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={1}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default FamilyMemberTable;
