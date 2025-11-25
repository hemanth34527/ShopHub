import mockData from '../data/mockData.json';

const AUTH_KEY = 'shophub_auth_token';
const USER_KEY = 'shophub_user_data';

class AuthService {
  login(email, password) {
    const user = mockData.users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      const { password, ...userWithoutPassword } = user;
      const token = this.generateToken();
      
      localStorage.setItem(AUTH_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(userWithoutPassword));
      
      return { success: true, user: userWithoutPassword, token };
    }

    return { success: false, message: 'Invalid email or password' };
  }

  signup(name, email, password) {
    // Check if user already exists
    const existingUser = mockData.users.find(u => u.email === email);
    
    if (existingUser) {
      return { success: false, message: 'Email already registered' };
    }

    // Create new user
    const newUser = {
      id: mockData.users.length + 1,
      email,
      name,
      role: 'user',
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff`
    };

    const token = this.generateToken();
    
    localStorage.setItem(AUTH_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    
    return { success: true, user: newUser, token };
  }

  logout() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY);
  }

  getCurrentUser() {
    const userData = localStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  isAuthenticated() {
    return !!localStorage.getItem(AUTH_KEY);
  }

  getToken() {
    return localStorage.getItem(AUTH_KEY);
  }

  generateToken() {
    // Generate a mock JWT-like token
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({ 
      exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      iat: Date.now()
    }));
    const signature = btoa(Math.random().toString(36).substring(2));
    
    return `${header}.${payload}.${signature}`;
  }
}

export default new AuthService();
