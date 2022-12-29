import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import Table from '../../components/Table/Table';

function AdminUsers() {
  const { isLoading, items } = useSelector((state) => state.user);
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <Table
        tHeadFirst="User Name"
        tHeadSecond="email"
        tHeadThird="CreatedAt"
        tHeadFourth="UpdatedAt"
        items={items}
        isUser
      />
    </div>
  );
}

export default AdminUsers;
