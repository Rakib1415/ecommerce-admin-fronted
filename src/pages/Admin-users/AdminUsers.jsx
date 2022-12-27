import React from 'react';
import Table from '../../components/Table/Table';

function AdminUsers() {
  return (
    <div>
      <Table
        tHeadFirst="User Name"
        tHeadSecond="email"
        tHeadThird="Phone Number"
        tHeadFourth="Role"
      />
    </div>
  );
}

export default AdminUsers;
