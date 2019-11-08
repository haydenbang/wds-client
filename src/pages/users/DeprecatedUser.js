/*
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

import './User.css';

class DeprecatedUser extends Component {
    render() {
        const { users } = this.props;
        if (users !== undefined) {
            return (
                <Paper className="userList">
                    <Table className="userTable" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>idx</TableCell>
                                <TableCell align="right">아이디</TableCell>
                                <TableCell align="right">이름</TableCell>
                                <TableCell align="right">닉네임</TableCell>
                                <TableCell align="right">주소</TableCell>
                                <TableCell align="right">연락처</TableCell>
                                <TableCell align="right">가입날짜</TableCell>
                                <TableCell align="right">최근접속날짜</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((row) => (
                                <TableRow key={row.idx}>
                                    <TableCell component="th" scope="row">
                                        {row.idx}
                                    </TableCell>
                                    <TableCell align="right">{row.id}</TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.nick_name}</TableCell>
                                    <TableCell align="right">{row.address}</TableCell>
                                    <TableCell align="right">{row.tel}</TableCell>
                                    <TableCell align="right">2019-11-01</TableCell>
                                    <TableCell align="right">2019-11-01</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            );
        }
        return <p>Loading...</p>;
    }
}

DeprecatedUser.propTypes = {
    users: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DeprecatedUser;
*/
