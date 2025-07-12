import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// --- Global Styles & Variables ---
const GlobalStyle = createGlobalStyle`
    :root {
        --dark-bg: #121212;
        --panel-bg: #1e1e1e;
        --accent-green: #00C853;
        --light-text: #ffffff;
        --secondary-text: #cccccc;
        --border-color: #333333;
        --button-dark-bg: #2a2a2a;
        --button-hover-bg: #3a3a3a;
        --action-delete: #dc3545;
        --action-update: #ffc107;
        --action-approve: #28a745;
    }

    body {
        margin: 0;
        font-family: 'Poppins', Arial, sans-serif;
        background-color: var(--dark-bg);
        color: var(--light-text);
        /* REMOVED: display: flex, justify-content, align-items, min-height, padding */
        box-sizing: border-box; /* Keep this */
    }
`;

// --- NEW Styled Component for overall page layout ---
const AppWrapper = styled.div`
    min-height: 100vh;
    background-color: var(--dark-bg);
    padding: 20px; /* Add padding to the whole wrapper */
    display: flex;
    flex-direction: column;
    align-items: center; /* This will center your constrained panels */
    width: 100%; /* Take full width */
`;

// --- Your existing Styled Components (e.g., AdminPanelContainer) ---
// Keep the max-width on AdminPanelContainer and UserDashboardContainer
const AdminPanelContainer = styled.div`
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    max-width: 900px; /* Keep this to limit the content width */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    flex-shrink: 0; /* Prevent it from shrinking */
`;


const AdminPanelHeader = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.8em;
    font-weight: 600;
    color: var(--light-text);
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    background-color: var(--dark-bg);
    border-radius: 8px;
    gap: 15px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Logo = styled.img`
    height: 35px;
    width: auto;
    margin-right: auto;
    vertical-align: middle;
    filter: brightness(1.2);

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 10px;
    }
`;

const SearchContainer = styled.div`
    position: relative;
    flex-grow: 1;
    max-width: 400px;

    @media (max-width: 768px) {
        width: 100%;
        max-width: none;
    }
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 10px 15px 10px 40px;
    border: 1px solid var(--border-color);
    border-radius: 25px;
    background-color: var(--button-dark-bg);
    color: var(--light-text);
    font-size: 1em;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
        outline: none;
        border-color: var(--accent-green);
        box-shadow: 0 0 0 2px rgba(0, 200, 83, 0.3);
    }
`;

const SearchIcon = styled.span`
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--secondary-text);
    font-size: 1.1em;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-end;
    }
`;

const ProfileCircle = styled.div`
    width: 40px;
    height: 40px;
    border: 2px solid var(--accent-green);
    border-radius: 50%;
    background-color: var(--button-dark-bg);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    color: var(--light-text);
    transition: background-color 0.3s, border-color 0.3s;

    &:hover {
        background-color: var(--button-hover-bg);
        border-color: var(--light-text);
    }
    &::before {
        content: '👤';
    }
`;

const NavButtons = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const NavButton = styled.button`
    flex: 1;
    padding: 10px 15px;
    background-color: var(--button-dark-bg);
    border: 1px solid var(--border-color);
    border-radius: 25px;
    color: var(--light-text);
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
    text-align: center;
    white-space: nowrap;

    &:hover {
        background-color: var(--button-hover-bg);
        border-color: var(--accent-green);
        color: var(--accent-green);
    }

    &.active {
        background-color: var(--accent-green);
        border-color: var(--accent-green);
        color: var(--dark-bg);
        font-weight: 600;
    }
`;

const ContentSection = styled.div`
    display: ${props => (props.active ? 'block' : 'none')};
`;

const SectionTitle = styled.h2`
    font-size: 1.5em;
    margin-bottom: 15px;
    text-align: center;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background-color: var(--dark-bg);
    color: var(--accent-green);
    font-weight: 600;
`;

const CardContainer = styled.div`
    /* This will contain the cards, allowing for spacing */
    & > * { /* Apply margin to direct children (the cards) */
        margin-bottom: 15px;
    }
    & > *:last-child {
        margin-bottom: 0; /* No margin on the last card */
    }
`;

const UserCardStyled = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--button-dark-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 15px;
    flex-wrap: wrap;
    gap: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`;

const UserAvatar = styled.div`
    width: 60px;
    height: 60px;
    border: 2px solid var(--accent-green);
    border-radius: 50%;
    background-color: #555;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8em;
    color: var(--light-text);
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:empty::before { /* Only show unicode if no image is present */
        content: '👤';
    }
`;

const UserDetails = styled.div`
    flex-grow: 1;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    padding: 10px;
    background-color: var(--panel-bg);
    min-width: 150px;

    @media (max-width: 768px) {
        width: 100%;
        box-sizing: border-box;
    }

    p {
        margin: 0;
        padding: 0;
        color: var(--secondary-text);
        line-height: 1.5;
        font-size: 0.95em;
    }
    strong {
        color: var(--light-text);
        font-weight: 600;
    }
`;

const UserActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 120px;

    @media (max-width: 768px) {
        width: 100%;
        box-sizing: border-box;
    }
`;

const ActionButton = styled.button`
    padding: 8px 12px;
    background-color: var(--accent-green);
    color: var(--dark-bg);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: 'Poppins', Arial, sans-serif;

    &:hover {
        background-color: var(--light-text);
        color: var(--accent-green);
    }

    &.delete {
        background-color: var(--action-delete);
        color: var(--light-text);
        &:hover {
            background-color: #c82333;
        }
    }
    &.update {
        background-color: var(--action-update);
        color: var(--dark-bg);
        &:hover {
            background-color: #e0a800;
        }
    }
    &.approve {
        background-color: var(--action-approve);
        color: var(--light-text);
        &:hover {
            background-color: #218838;
        }
    }
`;

// --- Reusable Card Components (for Users, Orders, Listings) ---

const UserCard = ({ user }) => (
    <UserCardStyled>
        <UserAvatar>
            {user.avatarUrl && <img src={user.avatarUrl} alt={user.name + ' Avatar'} />}
        </UserAvatar>
        <UserDetails>
            <p><strong>User ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Points:</strong> {user.points}</p>
        </UserDetails>
        <UserActions>
            <ActionButton>Edit User</ActionButton>
            <ActionButton className="delete">Delete User</ActionButton>
        </UserActions>
    </UserCardStyled>
);

const OrderCard = ({ order }) => (
    <UserCardStyled> {/* Re-using base styling */}
        <UserAvatar style={{ backgroundColor: '#8860B3' }}>🛒</UserAvatar> {/* Specific icon/color */}
        <UserDetails>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Type:</strong> {order.type}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Users:</strong> {order.users}</p>
        </UserDetails>
        <UserActions>
            <ActionButton>View Order</ActionButton>
            <ActionButton className="update">Update Status</ActionButton>
        </UserActions>
    </UserCardStyled>
);

const ListingCard = ({ listing }) => (
    <UserCardStyled> {/* Re-using base styling */}
        <UserAvatar style={{ backgroundColor: '#60B370' }}>👕</UserAvatar> {/* Specific icon/color */}
        <UserDetails>
            <p><strong>Listing ID:</strong> {listing.id}</p>
            <p><strong>Item:</strong> {listing.item}</p>
            <p><strong>Type:</strong> {listing.type}</p>
            <p><strong>Seller:</strong> {listing.seller}</p>
        </UserDetails>
        <UserActions>
            <ActionButton>View Listing</ActionButton>
            <ActionButton className="approve">Approve Listing</ActionButton>
        </UserActions>
    </UserCardStyled>
);

// --- Main Admin Panel Component ---

const API_BASE_URL = 'http://localhost:3000/api'; // ***IMPORTANT: Adjust this to your backend URL***

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('manage-users');
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch data based on activeTab
    const fetchData = async (tab) => {
        setLoading(true);
        setError(null);
        let endpoint = '';
        let setter = null;

        if (tab === 'manage-users') {
            endpoint = '/users';
            setter = setUsers;
        } else if (tab === 'manage-orders') {
            endpoint = '/orders';
            setter = setOrders;
        } else if (tab === 'manage-listings') {
            endpoint = '/listings';
            setter = setListings;
        }

        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setter(data);
        } catch (err) {
            console.error(`Error fetching ${tab}:`, err);
            setError(`Failed to load ${tab.replace('-', ' ')}. Please check the backend server.`);
        } finally {
            setLoading(false);
        }
    };

    // Effect to fetch data when activeTab changes (and on initial mount)
    useEffect(() => {
        fetchData(activeTab);
    }, [activeTab]); // Dependency array: re-run when activeTab changes

    const renderContent = () => {
        if (loading) {
            return <p style={{ textAlign: 'center', color: 'var(--secondary-text)' }}>Loading data...</p>;
        }
        if (error) {
            return <p style={{ textAlign: 'center', color: 'var(--action-delete)' }}>{error}</p>;
        }

        if (activeTab === 'manage-users') {
            if (users.length === 0) {
                return <p style={{ textAlign: 'center', color: 'var(--secondary-text)' }}>No users found in the database.</p>;
            }
            return (
                <CardContainer>
                    {users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </CardContainer>
            );
        } else if (activeTab === 'manage-orders') {
            if (orders.length === 0) {
                return <p style={{ textAlign: 'center', color: 'var(--secondary-text)' }}>No orders found in the database.</p>;
            }
            return (
                <CardContainer>
                    {orders.map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </CardContainer>
            );
        } else if (activeTab === 'manage-listings') {
            if (listings.length === 0) {
                return <p style={{ textAlign: 'center', color: 'var(--secondary-text)' }}>No listings found in the database.</p>;
            }
            return (
                <CardContainer>
                    {listings.map(listing => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))}
                </CardContainer>
            );
        }
        return null;
    };

    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <AdminPanelContainer>
                <AdminPanelHeader>Admin Panel</AdminPanelHeader>

                <TopBar>
                    <Logo src="logo.png" alt="ReWear Logo" />
                    <SearchContainer>
                        <SearchIcon>🔍</SearchIcon>
                        <SearchInput type="text" placeholder="Search users, orders, listings..." />
                    </SearchContainer>
                    <ProfileContainer>
                        <ProfileCircle />
                    </ProfileContainer>
                </TopBar>

                <NavButtons>
                    <NavButton
                        className={activeTab === 'manage-users' ? 'active' : ''}
                        onClick={() => setActiveTab('manage-users')}
                    >
                        Manage Users
                    </NavButton>
                    <NavButton
                        className={activeTab === 'manage-orders' ? 'active' : ''}
                        onClick={() => setActiveTab('manage-orders')}
                    >
                        Manage Orders
                    </NavButton>
                    <NavButton
                        className={activeTab === 'manage-listings' ? 'active' : ''}
                        onClick={() => setActiveTab('manage-listings')}
                    >
                        Manage Listings
                    </NavButton>
                </NavButtons>

                <ContentSection active={activeTab === 'manage-users'}>
                    <SectionTitle>Manage Users</SectionTitle>
                    {activeTab === 'manage-users' && renderContent()}
                </ContentSection>

                <ContentSection active={activeTab === 'manage-orders'}>
                    <SectionTitle>Manage Orders</SectionTitle>
                    {activeTab === 'manage-orders' && renderContent()}
                </ContentSection>

                <ContentSection active={activeTab === 'manage-listings'}>
                    <SectionTitle>Manage Listings</SectionTitle>
                    {activeTab === 'manage-listings' && renderContent()}
                </ContentSection>
            </AdminPanelContainer>
            </AppWrapper>
            
        </>
    );
};

export default AdminPanel;
