import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { Container, Row, Col, Card, Button, Nav, Tab, Alert } from 'react-bootstrap';
import { FaUser, FaChartLine, FaHistory, FaWallet, FaCog, FaSignOutAlt } from 'react-icons/fa';
import TradingDashboard from './TradingDashboard';
// import axios from 'axios';

// 1. Updated User interface to include balance and accountType
interface User {
  email?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  balance?: number;
  accountType?: string;
}

interface AuthContext {
  user: User | null;
  token: string | null;
  logout: () => void;
}

// 2. Updated AccountSummary to explicitly define fields used in render (avoids "unknown" errors)
interface AccountSummary {
  balance?: number;
  equity?: number;
  margin?: number;
  openPositionCount?: number;
  pl?: number;
  unrealizedPL?: number;
  resettablePL?: boolean;
}

interface Position {
  instrument?: string;
  long?: { units?: string | number; averagePrice?: string | number; pl?: string | number };
  short?: { units?: string | number; averagePrice?: string | number; pl?: string | number };
}

// 3. New Interface for Trading History Items
interface TradeHistoryItem {
  id: string | number;
  instrument: string;
  type: 'BUY' | 'SELL';
  amount: number;
  openPrice: number;
  closePrice: number;
  profit: number;
  date: string;
}

const UserDashboard: React.FC = () => {
  const { user, token, logout } = useAuth() as AuthContext;
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');

  const [accountSummary, setAccountSummary] = useState<AccountSummary | null>(null);
  const [openPositions, setOpenPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // set tab from query param if provided
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ['overview', 'trading', 'history', 'wallet', 'settings'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location.search]);

  useEffect(() => {
    const load = async () => {
      if (!token) return;
      try {
        setLoading(true);
        setError(null);

        // Use mock data instead of API calls
        const mockSummary: AccountSummary = {
          balance: user?.balance || 10000,
          openPositionCount: 2,
          pl: 150.75,
          unrealizedPL: 45.20
        };

        const mockPositions: Position[] = [
          {
            instrument: 'EUR_USD',
            long: { units: 100, averagePrice: 1.0850, pl: 25.50 },
            short: { units: 0, averagePrice: 0, pl: 0 }
          },
          {
            instrument: 'GBP_USD',
            long: { units: 0, averagePrice: 0, pl: 0 },
            short: { units: -50, averagePrice: 1.2750, pl: 19.70 }
          }
        ];

        setAccountSummary(mockSummary);
        setOpenPositions(mockPositions);
      } catch {
        setError('Failed to load account data');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [token, user]);

  // Form state for personal information
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    country: user?.country || ''
  });

  // Form state for password change
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Handle personal info form changes
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle password form changes
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle personal info form submission
  const handlePersonalInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add API call to update user information
    console.log('Updating personal info:', formData);
    // Show success message or handle errors
  };

  // Handle password change form submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate passwords match
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      // Show error message
      console.error('Passwords do not match');
      return;
    }
    // Add API call to update password
    console.log('Updating password');
    // Reset form and show success message
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  // 4. Update the type here to use TradeHistoryItem[]
  const tradingHistory: TradeHistoryItem[] = [];

  return (
    <Container fluid className="py-4">
      <Row>
        {/* Sidebar */}
        <Col md={3} lg={2} className="sidebar mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <div className="text-center p-4 bg-primary text-white">
                <div className="mb-3">
                  <div className="avatar-circle mx-auto">
                    <FaUser size={40} />
                  </div>
                </div>
                <h5 className="mb-1">{user?.firstName} {user?.lastName}</h5>
                <p className="small mb-0">{user?.email}</p>
              </div>

              <Nav className="flex-column nav-pills p-3" variant="pills">
                <Nav.Link
                  className={`mb-2 ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <FaChartLine className="me-2" /> Overview
                </Nav.Link>
                <Nav.Link
                  className={`mb-2 ${activeTab === 'trading' ? 'active' : ''}`}
                  onClick={() => setActiveTab('trading')}
                >
                  <FaChartLine className="me-2" /> Trading
                </Nav.Link>
                <Nav.Link
                  className={`mb-2 ${activeTab === 'history' ? 'active' : ''}`}
                  onClick={() => setActiveTab('history')}
                >
                  <FaHistory className="me-2" /> History
                </Nav.Link>
                <Nav.Link
                  className={`mb-2 ${activeTab === 'wallet' ? 'active' : ''}`}
                  onClick={() => setActiveTab('wallet')}
                >
                  <FaWallet className="me-2" /> Wallet
                </Nav.Link>
                <Nav.Link
                  className={`mb-2 ${activeTab === 'settings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <FaCog className="me-2" /> Settings
                </Nav.Link>
                <Nav.Link
                  className="text-danger mt-4"
                  onClick={logout}
                >
                  <FaSignOutAlt className="me-2" /> Logout
                </Nav.Link>
              </Nav>
            </Card.Body>
          </Card>
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10}>
          <Tab.Content>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="mb-4">Dashboard Overview</h2>

                <Row className="mb-4">
                  <Col md={4} className="mb-3">
                    <Card className="border-0 shadow-sm h-100">
                      <Card.Body>
                        <h6 className="text-muted mb-2">Account Balance</h6>
                        <h3 className="mb-0">
                          {loading ? '—' : `$${Number(accountSummary?.balance || user?.balance || 0).toLocaleString()}`}
                        </h3>
                        <small className="text-muted">
                          Account Type: {accountSummary ? (accountSummary?.resettablePL ? 'Practice' : 'Real') : (user?.accountType === 'demo' ? 'Demo' : 'Real')}
                        </small>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card className="border-0 shadow-sm h-100">
                      <Card.Body>
                        <h6 className="text-muted mb-2">Open Positions</h6>
                        <h3 className="mb-0">{loading ? '—' : (accountSummary?.openPositionCount ?? openPositions.length ?? 0)}</h3>
                        <small className="text-muted">via OANDA</small>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card className="border-0 shadow-sm h-100">
                      <Card.Body>
                        <h6 className="text-muted mb-2">Total Profit/Loss</h6>
                        <h3 className={(Number(accountSummary?.pl) || Number(accountSummary?.unrealizedPL) || 0) >= 0 ? 'text-success mb-0' : 'text-danger mb-0'}>
                          {loading ? '—' : `$${Number(accountSummary?.pl || accountSummary?.unrealizedPL || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
                        </h3>
                        <small className="text-muted">Unrealized P/L</small>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <Row className="mb-4">
                  <Col md={8} className="mb-3">
                    <Card className="border-0 shadow-sm">
                      <Card.Header className="bg-white">
                        <h5 className="mb-0">Recent Trading Activity</h5>
                      </Card.Header>
                      <Card.Body>
                        {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
                        <div className="table-responsive">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Instrument</th>
                                <th>Side</th>
                                <th>Units</th>
                                <th>Avg Price</th>
                                <th>Unrealized P/L</th>
                              </tr>
                            </thead>
                            <tbody>
                              {openPositions.length === 0 && (
                                <tr><td colSpan={5} className="text-muted">No open positions</td></tr>
                              )}
                              {openPositions.map((p: Position, idx: number) => {
                                // OANDA openPositions item structure: { instrument, long: { units, averagePrice, pl, ... }, short: {...} }
                                const longUnits = Number(p?.long?.units || 0);
                                const shortUnits = Number(p?.short?.units || 0);
                                const side = longUnits > 0 ? 'LONG' : (shortUnits < 0 ? 'SHORT' : 'FLAT');
                                const units = longUnits !== 0 ? longUnits : shortUnits;
                                const avg = longUnits !== 0 ? p?.long?.averagePrice : p?.short?.averagePrice;
                                const upl = longUnits !== 0 ? Number(p?.long?.pl || 0) : Number(p?.short?.pl || 0);
                                return (
                                  <tr key={idx}>
                                    <td>{p.instrument}</td>
                                    <td><span className={`badge ${side === 'LONG' ? 'bg-success' : (side === 'SHORT' ? 'bg-danger' : 'bg-secondary')}`}>{side}</span></td>
                                    <td>{units}</td>
                                    <td>{avg || '—'}</td>
                                    <td className={upl >= 0 ? 'text-success' : 'text-danger'}>{upl >= 0 ? '+' : ''}{upl.toFixed(2)}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card className="border-0 shadow-sm h-100">
                      <Card.Header className="bg-white">
                        <h5 className="mb-0">Quick Actions</h5>
                      </Card.Header>
                      <Card.Body>
                        <div className="d-grid gap-2">
                          <Button variant="primary" size="lg" onClick={() => setActiveTab('trading')}>
                            Start Trading
                          </Button>
                          <Button variant="outline-primary" size="lg">
                            Deposit Funds
                          </Button>
                          <Button variant="outline-secondary" size="lg">
                            View Trading History
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            )}

            {/* Trading Tab */}
            {activeTab === 'trading' && (
              <div>
                <h2 className="mb-4">Trading Platform</h2>
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <TradingDashboard />
                  </Card.Body>
                </Card>
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div>
                <h2 className="mb-4">Trading History</h2>
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Instrument</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Open Price</th>
                            <th>Close Price</th>
                            <th>Profit/Loss</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tradingHistory.map(trade => (
                            <tr key={trade.id}>
                              <td>{trade.instrument}</td>
                              <td>
                                <span className={`badge ${trade.type === 'BUY' ? 'bg-success' : 'bg-danger'}`}>
                                  {trade.type}
                                </span>
                              </td>
                              <td>${trade.amount}</td>
                              <td>{trade.openPrice}</td>
                              <td>{trade.closePrice}</td>
                              <td className={trade.profit >= 0 ? 'text-success' : 'text-danger'}>
                                {trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}
                              </td>
                              <td>{trade.date}</td>
                            </tr>
                          ))}
                          {tradingHistory.length === 0 && (
                            <tr><td colSpan={7} className="text-center text-muted">No history available</td></tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )}

            {/* Wallet Tab */}
            {activeTab === 'wallet' && (
              <div>
                <h2 className="mb-4">Wallet</h2>
                <Row>
                  <Col md={6} className="mb-4">
                    <Card className="border-0 shadow-sm">
                      <Card.Header className="bg-white">
                        <h5 className="mb-0">Account Balance</h5>
                      </Card.Header>
                      <Card.Body>
                        {/* Added safety check for balance */}
                        <h2 className="mb-3">${(user?.balance || 0).toLocaleString()}</h2>
                        <p>Account Type: <span className="badge bg-info">{user?.accountType === 'demo' ? 'Demo' : 'Real'}</span></p>
                        <div className="d-grid gap-2">
                          <Button variant="primary">Deposit Funds</Button>
                          <Button variant="outline-primary">Withdraw Funds</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Card className="border-0 shadow-sm">
                      <Card.Header className="bg-white">
                        <h5 className="mb-0">Transaction History</h5>
                      </Card.Header>
                      <Card.Body>
                        <Alert variant="info">
                          No recent transactions to display.
                        </Alert>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <h2 className="mb-4">Account Settings</h2>
                <Card className="border-0 shadow-sm mb-4">
                  <Card.Header className="bg-white">
                    <h5 className="mb-0">Personal Information</h5>
                  </Card.Header>
                  <Card.Body>
                    <form onSubmit={handlePersonalInfoSubmit}>
                      <Row>
                        <Col md={6} className="mb-3">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handlePersonalInfoChange}
                            aria-label="First Name"
                            placeholder="Enter your first name"
                          />
                        </Col>
                        <Col md={6} className="mb-3">
                          <label className="form-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handlePersonalInfoChange}
                            aria-label="Last Name"
                            placeholder="Enter your last name"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            value={user?.email || ''}
                            readOnly
                            disabled
                            aria-label="Email"
                            title="User email"
                          />
                        </Col>
                        <Col md={6} className="mb-3">
                          <label className="form-label">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            name="country"
                            value={formData.country}
                            onChange={handlePersonalInfoChange}
                            aria-label="Country"
                            placeholder="Enter your country"
                          />
                        </Col>
                      </Row>
                      <Button variant="primary" type="submit">Save Changes</Button>
                    </form>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm">
                  <Card.Header className="bg-white">
                    <h5 className="mb-0">Security</h5>
                  </Card.Header>
                  <Card.Body>
                    <form onSubmit={handlePasswordSubmit}>
                      <Row>
                        <Col md={6} className="mb-3">
                          <label className="form-label">Current Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="currentPassword"
                            value={passwordData.currentPassword}
                            onChange={handlePasswordChange}
                            placeholder="Enter current password"
                            aria-label="Current Password"
                            title="Enter your current password"
                            required
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <label className="form-label">New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="newPassword"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            placeholder="Enter new password"
                            aria-label="New Password"
                            title="Enter your new password"
                            required
                          />
                        </Col>
                        <Col md={6} className="mb-3">
                          <label className="form-label">Confirm New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange}
                            placeholder="Confirm new password"
                            aria-label="Confirm New Password"
                            title="Confirm your new password"
                            required
                          />
                        </Col>
                      </Row>
                      <Button variant="primary" type="submit">Change Password</Button>
                    </form>
                  </Card.Body>
                </Card>
              </div>
            )}
          </Tab.Content>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;