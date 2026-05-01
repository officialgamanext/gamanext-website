import { Utensils, ShoppingBag, GraduationCap, Users, Layout, Settings } from 'lucide-react';

export const productsData = [
  {
    id: 'billing-hospitality',
    title: 'LekaPOS',
    category: 'Billing Software',
    description: 'A comprehensive billing and management solution specifically designed for Cafes, Bakeries, and Restaurants. Streamline your operations from order to payment.',
    features: [
      'Quick Billing & Invoicing',
      'Table Management',
      'Kitchen Display System (KDS)',
      'Inventory & Stock Tracking',
      'Daily Sales Reports'
    ],
    icon: Utensils,
    color: '#FF6B6B'
  },
  {
    id: 'retail-supermarket',
    title: 'LekaRetail',
    category: 'Retail Software',
    description: 'Powerful retail management software for Supermarkets, Grocery stores, and Retail outlets. Includes advanced barcode scanning and stock management.',
    features: [
      'Barcode Integration',
      'Multi-Counter Billing',
      'Batch-wise Stock Management',
      'Purchase & GST Reports',
      'Customer Loyalty Programs'
    ],
    icon: ShoppingBag,
    color: '#4ECDC4'
  },
  {
    id: 'school-management',
    title: 'LekaEdu',
    category: 'Educational Software',
    description: 'An all-in-one School Management System to digitize your educational institution. Manage students, staff, academics, and finances in one place.',
    features: [
      'Student Admission & Records',
      'Fee Management with Receipts',
      'Exam & Result Management',
      'Staff Payroll & Attendance',
      'Parent-Teacher Communication'
    ],
    icon: GraduationCap,
    color: '#45B7D1'
  },
  {
    id: 'hr-management',
    title: 'LekaHRM',
    category: 'Enterprise Software',
    description: 'Simplify your HR processes with our Human Resource Management system. From onboarding to payroll, manage your workforce efficiently.',
    features: [
      'Employee Directory',
      'Attendance Tracking',
      'Automated Payroll Processing',
      'Leave Management',
      'Performance Analytics'
    ],
    icon: Users,
    color: '#96CEB4'
  },
  {
    id: 'custom-software',
    title: 'LekaCustom Solutions',
    category: 'Custom Development',
    description: 'Unique business challenges require unique solutions. We build bespoke software architectures designed specifically for your operational workflow.',
    features: [
      'Scalable Web Architectures',
      'Third-party API Integration',
      'Custom ERP/CRM Systems',
      'Cloud-native Solutions',
      'Enterprise-grade Security'
    ],
    icon: Settings,
    color: '#FFEEAD'
  }
];
