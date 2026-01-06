import React from 'react';
import AdminPanel from '../components/admin/AdminPanel.jsx';
import Preview from '../components/admin/Preview.jsx';
import '../styles/admin.css';

function AdminView() {
  return (
    <div className="app-root admin-root">
      <AdminPanel />
      <Preview />
    </div>
  );
}

export default AdminView;
