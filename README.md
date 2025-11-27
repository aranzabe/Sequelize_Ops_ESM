# Operadores Ops de Sequelize

Los **operadores** permiten construir condiciones complejas en las consultas.

Se importan así:

```jsx
const { Op } = require('sequelize');
```

O en ES modules:

```jsx
import { Op } from 'sequelize';
```

# **1. Operadores básicos**

## 🔹 **Op.eq** — Igual a

```jsx
User.findAll({
  where: { edad: { [Op.eq]: 30 } }
});
```

SQL: `WHERE edad = 30`

## 🔹 **Op.ne** — Distinto de

```jsx
User.findAll({
  where: { estado: { [Op.ne]: 'activo' } }
});
```

SQL: `WHERE estado <> 'activo'`

## **🔹 Op.gt / Op.gte — Mayor que / Mayor o igual que**

```jsx
User.findAll({
  where: { edad: { [Op.gt]: 18 } }
});
```

SQL: `WHERE edad > 18`

## 🔹 **Op.lt / Op.lte** — Menor que / Menor o igual que

```jsx
User.findAll({
  where: { edad: { [Op.lte]: 65 } }
});
```

SQL: `WHERE edad <= 65`

---

# **2. Operadores combinados**

## 🔹 **Op.between** — Entre

```jsx
Product.findAll({
  where: {
    precio: { [Op.between]: [10, 100] }
  }
});
```

SQL: `WHERE precio BETWEEN 10 AND 100`

## 🔹 **Op.notBetween** — Fuera de rango

```jsx
Order.findAll({
  where: {
    fecha: { [Op.notBetween]: ['2024-01-01', '2024-12-31'] }
  }
});
```

---

# **3. Listas**

## 🔹 **Op.in** — Dentro de una lista

```jsx
User.findAll({
  where: {
    rol: { [Op.in]: ['admin', 'editor'] }
  }
});
```

## 🔹 **Op.notIn** — No dentro de una lista

```jsx
User.findAll({
  where: {
    rol: { [Op.notIn]: ['banned', 'suspended'] }
  }
});
```

---

# **4. Búsquedas con texto**

## 🔹 **Op.like** — Contiene (dependiente de dialecto: %)

```jsx
Post.findAll({
  where: {
    titulo: { [Op.like]: '%javascript%' }
  }
});
```

## 🔹 **Op.notLike**

```jsx
User.findAll({
  where: {
    email: { [Op.notLike]: '%@spam.com' }
  }
});
```

## 🔹 **Op.startsWith / endsWith / substring**

```jsx
User.findAll({
  where: {
    nombre: { [Op.startsWith]: 'A' }
  }
});
```

Equivale a `LIKE 'A%'`

# **5. Operadores lógicos**

## 🔹 **Op.and**

```jsx
User.findAll({
  where: {
    [Op.and]: [
      { activo: true },
      { edad: { [Op.gt]: 18 } }
    ]
  }
});
```

SQL: WHERE activo = TRUE AND edad > 18

## 🔹 **Op.or**

```jsx
User.findAll({
  where: {
    [Op.or]: [
      { rol: 'admin' },
      { rol: 'editor' }
    ]
  }
});
```

## 🔹 **Op.not**

```jsx
User.findAll({
  where: {
    activo: { [Op.not]: true }
  }
});
```

---

# **6. Operadores para NULL**

## 🔹 **Op.is**

```jsx
Task.findAll({
  where: {
    completado: { [Op.is]: null }
  }
});
```

## 🔹 **Op.not**

```jsx
Task.findAll({
  where: {
    fechaFin: { [Op.not]: null }
  }
});
```

---

# **7. Operadores numéricos avanzados**

## 🔹 **Op.between** con fechas

```jsx
Event.findAll({
  where: {
    createdAt: { [Op.between]: [startDate, endDate] }
  }
});
```

🔹 **Op.gt + Op.lt** (rango más flexible)

```jsx
Product.findAll({
  where: {
    precio: {
      [Op.gt]: 10,
      [Op.lt]: 50
    }
  }
});
```

---

# **8. Operadores en asociaciones (include + where)**

```jsx
User.findAll({
  include: [{
    model: Post,
    where: {
      likes: { [Op.gt]: 100 }
    }
  }]
});
```

Esto obtiene usuarios **que tienen posts** con más de 100 likes

---

# 9. Buscar por varias condiciones en un mismo campo

```jsx
User.findAll({
  where: {
    edad: {
      [Op.gt]: 18,
      [Op.lt]: 30
    }
  }
});
```

---

# 10. Mezclar múltiples operadores

```jsx
Product.findAll({
  where: {
    [Op.or]: [
      { precio: { [Op.lt]: 10 } },
      { stock: { [Op.gt]: 100 } }
    ],
    categoria: { [Op.notIn]: ['prohibido'] }
  }
});
```

---

# **11. Consultas avanzadas con include**

## Obtener usuarios con posts filtrados:

```jsx
User.findAll({
  include: {
    model: Post,
    where: { likes: { [Op.gt]: 10 } }
  }
});
```

## Ocultar columnas de la tabla incluida:

```jsx
User.findAll({
  include: {
    model: Post,
    attributes: ['titulo']  
  }
});
```

## include anidado (nested include)

```jsx
User.findAll({
  include: {
    model: Post,
    include: Comment
  }
});
```

---

# **12. SUMAR TODAS LAS COLUMNAS (SUM)**

## 🔹 Sumar todos los totales

```jsx
const { Sequelize } = require('sequelize');

const resultado = await Order.findOne({
  attributes: [
    [Sequelize.fn('SUM', Sequelize.col('total')), 'totalSum']
  ],
  raw: true
});

console.log(resultado.totalSum);
```

SQL equivalente:

```jsx
SELECT SUM(total) AS totalSum FROM Orders;
```

---

# **13. MEDIA DE VALORES (AVG)**

## 🔹 Media de todas las puntuaciones

```jsx
const resultado = await Order.findOne({
  attributes: [
    [Sequelize.fn('AVG', Sequelize.col('puntuacion')), 'averageScore']
  ],
  raw: true
});

console.log(resultado.averageScore);
```

SQL:

```jsx
SELECT AVG(puntuacion) AS averageScore FROM Orders;
```

---

# Resumen

| Operador | Significado |
| --- | --- |
| Op.eq | Igual |
| Op.ne | Distinto |
| Op.gt / Op.gte | > , >= |
| Op.lt / Op.lte | < , <= |
| Op.between | Entre |
| Op.in | En lista |
| Op.like | Contiene |
| Op.startsWith / endsWith | Prefijo/sufijo |
| Op.or / Op.and | Lógicos |
| Op.is | NULL |